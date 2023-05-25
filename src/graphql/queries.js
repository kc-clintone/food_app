/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBasket = /* GraphQL */ `
  query GetBasket($id: ID!) {
    getBasket(id: $id) {
      id
      BasketDishes {
        items {
          id
          Quantity
          basketID
          createdAt
          updatedAt
          basketDishDishId
        }
        nextToken
      }
      userID
      restaurantID
      createdAt
      updatedAt
    }
  }
`;
export const listBaskets = /* GraphQL */ `
  query ListBaskets(
    $filter: ModelBasketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBaskets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        BasketDishes {
          nextToken
        }
        userID
        restaurantID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrderItem = /* GraphQL */ `
  query GetOrderItem($id: ID!) {
    getOrderItem(id: $id) {
      id
      Quantity
      Dish {
        id
        name
        image
        description
        price
        restaurantID
        createdAt
        updatedAt
      }
      ordersID
      createdAt
      updatedAt
      orderItemDishId
    }
  }
`;
export const listOrderItems = /* GraphQL */ `
  query ListOrderItems(
    $filter: ModelOrderItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Quantity
        Dish {
          id
          name
          image
          description
          price
          restaurantID
          createdAt
          updatedAt
        }
        ordersID
        createdAt
        updatedAt
        orderItemDishId
      }
      nextToken
    }
  }
`;
export const getOrders = /* GraphQL */ `
  query GetOrders($id: ID!) {
    getOrders(id: $id) {
      id
      userID
      Restaurant {
        id
        name
        image
        deliveryFee
        minDeliverytime
        maxDeliveryTime
        rating
        address
        lat
        lng
        Dishes {
          nextToken
        }
        Baskets {
          nextToken
        }
        createdAt
        updatedAt
      }
      SubTotal
      Total
      Status
      OrderItems {
        items {
          id
          Quantity
          ordersID
          createdAt
          updatedAt
          orderItemDishId
        }
        nextToken
      }
      createdAt
      updatedAt
      ordersRestaurantId
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrdersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        Restaurant {
          id
          name
          image
          deliveryFee
          minDeliverytime
          maxDeliveryTime
          rating
          address
          lat
          lng
          createdAt
          updatedAt
        }
        SubTotal
        Total
        Status
        OrderItems {
          nextToken
        }
        createdAt
        updatedAt
        ordersRestaurantId
      }
      nextToken
    }
  }
`;
export const getBasketDish = /* GraphQL */ `
  query GetBasketDish($id: ID!) {
    getBasketDish(id: $id) {
      id
      Quantity
      Dish {
        id
        name
        image
        description
        price
        restaurantID
        createdAt
        updatedAt
      }
      basketID
      createdAt
      updatedAt
      basketDishDishId
    }
  }
`;
export const listBasketDishes = /* GraphQL */ `
  query ListBasketDishes(
    $filter: ModelBasketDishFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBasketDishes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Quantity
        Dish {
          id
          name
          image
          description
          price
          restaurantID
          createdAt
          updatedAt
        }
        basketID
        createdAt
        updatedAt
        basketDishDishId
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      address
      lat
      lng
      Orders {
        items {
          id
          userID
          SubTotal
          Total
          Status
          createdAt
          updatedAt
          ordersRestaurantId
        }
        nextToken
      }
      Baskets {
        items {
          id
          userID
          restaurantID
          createdAt
          updatedAt
        }
        nextToken
      }
      sub
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        address
        lat
        lng
        Orders {
          nextToken
        }
        Baskets {
          nextToken
        }
        sub
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDish = /* GraphQL */ `
  query GetDish($id: ID!) {
    getDish(id: $id) {
      id
      name
      image
      description
      price
      restaurantID
      createdAt
      updatedAt
    }
  }
`;
export const listDishes = /* GraphQL */ `
  query ListDishes(
    $filter: ModelDishFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDishes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        description
        price
        restaurantID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRestaurant = /* GraphQL */ `
  query GetRestaurant($id: ID!) {
    getRestaurant(id: $id) {
      id
      name
      image
      deliveryFee
      minDeliverytime
      maxDeliveryTime
      rating
      address
      lat
      lng
      Dishes {
        items {
          id
          name
          image
          description
          price
          restaurantID
          createdAt
          updatedAt
        }
        nextToken
      }
      Baskets {
        items {
          id
          userID
          restaurantID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listRestaurants = /* GraphQL */ `
  query ListRestaurants(
    $filter: ModelRestaurantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRestaurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        deliveryFee
        minDeliverytime
        maxDeliveryTime
        rating
        address
        lat
        lng
        Dishes {
          nextToken
        }
        Baskets {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
