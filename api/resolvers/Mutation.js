const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {
	syncInventory,
	syncTaxes,
	getOldLineItems,
	voidManualLineItems,
	addLineItems,
	getAccessToken
} = require('../utils/cloverUtils')
const {
	getUserId,
	processUpload,
	getLocationsByUserId
} = require('../utils/utils')
const { LOGIN, ORDER } = require('../utils/fragments')
const { ORDER_STATUS, HTTP_VERBS } = require('../utils/constants')

require('dotenv').config()

async function createMenuItem(root, args, context) {
	const locations = await getLocationsByUserId(context)
	return context.prisma.createMenuItem({
		price: args.price,
		title: args.title,
		pictureURL: args.pictureURL,
		description: args.description,
		calories: args.calories,
		location: {
			connect: {
				id: locations[0].id,
			}
		},
		categories: {
			connect: [{
				id: args.categoryId
			}]
		}
	})
}

async function createMenuCategory(root, args, context) {
	const locations = await getLocationsByUserId(context)
	return context.prisma.createMenuCategory({
		name: args.name,
		owner: {
			connect: {
				id: locations[0].id
			}
		}
	})
}

function createKitchenPrinter(root, args, context) {
	const userId = getUserId(context)
	return context.prisma.createKitchenPrinter({
		type: args.type,
		ipAddress: args.ipAddress
	})
}

function createOption(root, args, context) {
	getUserId(context)
	return context.prisma.createOption({
		title: args.title,
		maxSelections: args.maxSelections,
		required: args.required,
		priority: args.priority,
		menuItems: {
			connect: args.menuItems
		}
	})
}


function createOptionValue(root, args, context) {
	getUserId(context)
	return context.prisma.createOptionValue({
		title: args.title,
		priority: args.priority,
		price: args.price,
		isDefault: args.isDefault,
		option: {
			connect: {
				id: args.optionId,
			}
		}
	})
}

function createLocation(root, args, context) {
	const userId = getUserId(context)
	return context.prisma.createLocation({
		address: args.address,
		phoneNumber: args.phoneNumber,
		email: args.email,
		timeZone: args.timeZone,
		name: args.name,
		owner: {
			connect: {
				id: userId,
			}
		}
	})
}

function updateUser(root, args, context) {
	const userId = getUserId(context)
	return context.prisma.updateUser({
		where: { id: userId },
		data: {
			password: args.password,
			email: args.email,
			name: args.name
		}
	})
}

function updateMenuItem(root, args, context) {
	getUserId(context)
	return context.prisma.updateMenuItem({
		where: { id: args.menuItemId },
		data: {
			description: args.description,
			title: args.title,
			pictureURL: args.url,
			price: args.price,
			menuItemToUpsell: {
				connect: {
					id: args.menuItemToUpsell
				}
			}
		}
	})
}

function updateMenuCategory(root, args, context) {
	const userId = getUserId(context)
	return context.prisma.updateMenuCategory({
		where: { owner: userId},
		data: {
			name: args.string
		}
	})
}

function updateOption(root, args, context) {
	getUserId(context)
	return context.prisma.updateOption({
		where: { id: args.optionId },
		data: {
			name: args.string,
			status: args.status,
			price: args.price
		}
	})
}

function updateLocation(root, args, context) {
	getUserId(context)
	return context.prisma.updateLocation({
		where: { id: args.locationId },
		data: {
			address: args.address,
			email: args.email,
			phoneNumber: args.phoneNumber
		}
	})
}

function deleteUser(root, args, context) {
	const userId = getUserId(context)
	return context.prisma.deleteUser({
		id: userId
	})
}

function deleteOrder(root, args, context) {
	getUserId(context)
	return context.prisma.deleteOrder({
		id: args.orderId
	})
}

function deleteLocation(root, args, context) {
	getUserId(context)
	return context.prisma.deleteLocation({
		id: args.locationId
	})
}

function deleteMenuItem(root, args, context) {
	getUserId(context)
	return context.prisma.deleteMenuItem({
		id: args.menuItemId
	})
}

async function syncLocation(root, args, context){
	const locations = await getLocationsByUserId(context)
	let { cloverMetaData , id} =  locations[0]
	const { merchantId, accessToken } = cloverMetaData

	const inventoryOptions = {
		method: HTTP_VERBS.GET,
		url: process.env.CLOVER_API_BASE_URL + merchantId + '/items',
		qs: {access_token: accessToken, expand: 'modifierGroups'}
	};

	const taxOptions =  {
		method: HTTP_VERBS.GET,
		url: process.env.CLOVER_API_BASE_URL + merchantId +  '/tax_rates',
		qs: {access_token: accessToken},
		headers: {accept: 'application/json'}
	};

	const modifierGroupOptions = {
    method: HTTP_VERBS.GET,
    url: process.env.CLOVER_API_BASE_URL + merchantId + '/modifier_groups',
    qs: {expand: 'modifiers', access_token: accessToken},
  };

	return Promise.all([
		syncInventory(inventoryOptions, modifierGroupOptions, context, id),
		syncTaxes(taxOptions, context, id)
	])
}

// updating Clover Order
async function updateOrder(root, args, context){
	const locations = await getLocationsByUserId(context);
	let { cloverMetaData } =  locations[0];
	let { merchantId, accessToken } = cloverMetaData

	const oldLineItems = await getOldLineItems(args.orderId, accessToken, merchantId)

	return Promise.all([
		voidManualLineItems(oldLineItems, args.orderId, accessToken, merchantId),
		addLineItems(args, accessToken, merchantId)
	])
}

function updateMenuItemPreferences(root, args, context) {
	const userId = getUserId(context)
	return context.prisma.updateMenuItem({
		where: { id: args.menuItemId },
		data: {
			preferences: { set: args.preferences}
		}
	})

}
	
// create Order
async function createOrderLog(root, args, context){
	const locations = await getLocationsByUserId(context);
	const location = locations[0];

	const orderedItems = await Promise.all(args.items.map(item => {
		return context.prisma.createOrderedItem({
			menuItem: {
				connect: {
					id: item.menuItemId,
				}
			},
			optionValues: {
				connect: item.optionValueIds.map(id => {
					return {
						id
					}
				})
			},
			quantity: item.quantity,
			isUpsoldItem: item.isUpsoldItem
		})
	}))

	return context.prisma.createOrderLog({
		location: {
			connect: {
				id: location.id,
			}
		},
		orderedItems: {
			connect: orderedItems.map(item => {
				return { id: item.id }
			})
		},
		status: ORDER_STATUS.ORDERED,
	})
	.$fragment(ORDER);
}

async function addAccessTokenToLocation(root, args, context){
	const { code, merchantId } = args

	const userId = getUserId(context)
	const locations = await context.prisma
	.user({
		id: userId,
	})
	.locations()
	const locationId = locations[0].id

	const token = await getAccessToken(code)
	return context.prisma.updateLocation({
		where: { id: locationId },
		data: {
			cloverMetaData: {
				update: {
					accessToken: token,
					merchantId: merchantId,
				}
			}
		}
	})
}

async function uploadMenuItemPicture(root, args, ctx, info) {
	return await processUpload(await args, ctx)
}


async function signup(parent, args, context, info) {
  // 1
  const password = await bcrypt.hash(args.password, 10)
  // 2
  const user = await context.prisma.createUser({ ...args, password })

  // 3
  const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET)

  // 4
  return {
    token,
    user,
  }
}

async function login(parent, args, context, info) {
  // 1
	const user = await context.prisma.user({ email: args.email }).$fragment(LOGIN)

  if (!user) {
    throw new Error('No such user found')
  }

  // 2
  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
	}

  const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET)

  // 3
  return {
    token,
    user,
  }
}

module.exports = {
  signup,
  login,
	deleteMenuItem,
	deleteLocation,
	deleteOrder,
	createOrderLog,
	deleteUser,
	updateLocation,
	updateUser,
	updateOrder,
	createOption,
	createMenuItem,
	updateMenuItem,
	createLocation,
	uploadMenuItemPicture,
	createMenuCategory,
	updateMenuCategory,
	updateOption,
	createOptionValue,
	syncLocation,
	createKitchenPrinter,
	addAccessTokenToLocation,
	updateMenuItemPreferences
}
