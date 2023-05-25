/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBasket = /* GraphQL */ `
  subscription OnCreateBasket {
    onCreateBasket {
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
export const onUpdateBasket = /* GraphQL */ `
  subscription OnUpdateBasket {
    onUpdateBasket {
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
export const onDeleteBasket = /* GraphQL */ `
  subscription OnDeleteBasket {
    onDeleteBasket {
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
export const onCreateOrderItem = /* GraphQL */ `
  subscription OnCreateOrderItem {
    onCreateOrderItem {
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
export const onUpdateOrderItem = /* GraphQL */ `
  subscription OnUpdateOrderItem {
    onUpdateOrderItem {
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
export const onDeleteOrderItem = /* GraphQL */ `
  subscription OnDeleteOrderItem {
    onDeleteOrderItem {
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
export const onCreateOrders = /* GraphQL */ `
  subscription OnCreateOrders {
    onCreateOrders {
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
export const onUpdateOrders = /* GraphQL */ `
  subscription OnUpdateOrders {
    onUpdateOrders {
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
export const onDeleteOrders = /* GraphQL */ `
  subscription OnDeleteOrders {
    onDeleteOrders {
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
export const onCreateBasketDish = /* GraphQL */ `
  subscription OnCreateBasketDish {
    onCreateBasketDish {
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
export const onUpdateBasketDish = /* GraphQL */ `
  subscription OnUpdateBasketDish {
    onUpdateBasketDish {
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
export const onDeleteBasketDish = /* GraphQL */ `
  subscription OnDeleteBasketDish {
    onDeleteBasketDish {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateDish = /* GraphQL */ `
  subscription OnCreateDish {
    onCreateDish {
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
export const onUpdateDish = /* GraphQL */ `
  subscription OnUpdateDish {
    onUpdateDish {
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
export const onDeleteDish = /* GraphQL */ `
  subscription OnDeleteDish {
    onDeleteDish {
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
export const onCreateRestaurant = /* GraphQL */ `
  subscription OnCreateRestaurant {
    onCreateRestaurant {
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
export const onUpdateRestaurant = /* GraphQL */ `
  subscription OnUpdateRestaurant {
    onUpdateRestaurant {
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
export const onDeleteRestaurant = /* GraphQL */ `
  subscription OnDeleteRestaurant {
    onDeleteRestaurant {
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
