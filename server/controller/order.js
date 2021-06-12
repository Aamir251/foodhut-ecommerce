import Order from '../models/orderModel.js'

// @desc    add ordered Items
// @route   PUSH /orders/
// @access  Private
export const addOrderItems = async(req, res) => {

    const { orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body;

    if (orderItems && orderItems.length === 0 ) {
        res.status(400)
        throw new Error("No Order Items")
        return
    } else {
        const order = new Order({
            orderItems, shippingAddress, user: req.user._id, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice
        });

        const createdOrder = await order.save()

        res.status(201).json(createdOrder)
    }
}

// @desc    Get ordered Items by Id
// @route   GET /orders/:id
// @access  Private
export const getOrderDetails = async(req, res) => {

    // populate is used to get the name and email of the person associated with the particular Order
    // 'user' is associated with the actual User model, so it finds the name and email from the User Model
    const order = await Order.findById(req.params.id).populate('user', 'name email')


    if (order) {
        res.json(order)
    } else {
        res.status(404)
        throw new Error("Order Not Found")
    }
}


