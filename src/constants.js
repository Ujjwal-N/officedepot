//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ API ENDPOINTS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// NODE SERVER
export const NODE_SERVER = "http://3.133.128.233:5001";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ CUSTOMERS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export const CREATE_CUSTOMER_ENDPOINT = `${NODE_SERVER}/register`;
export const USER_LOGIN_ENDPOINT = `${NODE_SERVER}/login`;
export const GET_ALL_CUSTOMERS_ENDPOINT = `${NODE_SERVER}/displayCustomers`;
// '/updateCustomer/${email}'
export const UPDATE_CUSTOMER_ENDPOINT = `${NODE_SERVER}/updateCustomer/`;
export const DELETE_CUSTOMER_ENDPOINT = `${NODE_SERVER}/removeCustomer/`;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ EMPLOYEES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export const CREATE_EMPLOYEE_ENDPOINT = `${NODE_SERVER}/employeeCreate`;
export const EMPLOYEE_LOGIN_ENDPOINT = `${NODE_SERVER}/employeeLogin`;
// '/updateEmployee/${email}'
export const UPDATE_EMPLOYEE_ENDPOINT = `${NODE_SERVER}/updateEmployee/`;
export const DELETE_EMPLOYEE_ENDPOINT = `${NODE_SERVER}/removeEmployee`;
export const GET_EMPLOYEE_ID_ENDPOINT = `${NODE_SERVER}/getEmployeeID`;
export const GET_EMPLOYEE_FIRST_NAME_ENDPOINT = `${NODE_SERVER}/getEmployFirstName`;
export const GET_EMPLOYEE_LAST_NAME_ENDPOINT = `${NODE_SERVER}/getEmployLastName`;
export const GET_EMPLOYEE_ADDRESS_ENDPOINT = `${NODE_SERVER}/getEmployAddress`;
export const UPDATE_EMPLOYEE_FIRST_NAME_ENDPOINT = `${NODE_SERVER}/updateEmployFirstName`;
export const UPDATE_EMPLOYEE_LAST_NAME_ENDPOINT = `${NODE_SERVER}/updateEmployLastName`;
export const UPDATE_EMPLOYEE_ADDRESS_ENDPOINT = `${NODE_SERVER}/updateEmployAddress`;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ INVENTORY ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export const CREATE_INVENTORY_ENDPOINT = `${NODE_SERVER}/createInventory`;
// '/updateInventory/${inventory_id}'
export const UPDATE_INVENTORY_ENDPOINT = `${NODE_SERVER}/updateInventory/`;
export const DELETE_INVENTORY_ENDPOINT = `${NODE_SERVER}/removeInventoryItem/`;

export const GET_ALL_INVENTORY_ENDPOINT = `${NODE_SERVER}/displayInventory`;
export const GET_INVENTORY_NAME_ENDPOINT = `${NODE_SERVER}/getInventoryName`;
export const GET_INVENTORY_DESCRIPTION_ENDPOINT = `${NODE_SERVER}/getInventoryDescription`;
export const GET_INVENTORY_WEIGHT_ENDPOINT = `${NODE_SERVER}/getInventoryWeight`;
export const GET_INVENTORY_PRICE_ENDPOINT = `${NODE_SERVER}/getInventoryPrice`;
export const GET_INVENTORY_ITEM_GROUP_ENDPOINT = `${NODE_SERVER}/getInventoryItemGroup`;
export const GET_INVENTORY_STOCK_ENDPOINT = `${NODE_SERVER}/getInventoryStock`;
export const UPDATE_INVENTORY_NAME_ENDPOINT = `${NODE_SERVER}/updateName`;
export const UPDATE_INVENTORY_DESCRIPTION_ENDPOINT = `${NODE_SERVER}/updateDescription`;
export const UPDATE_INVENTORY_WEIGHT_ENDPOINT = `${NODE_SERVER}/updateWeight`;
export const UPDATE_INVENTORY_PRICE_ENDPOINT = `${NODE_SERVER}/updatePrice`;
export const UPDATE_INVENTORY_ITEM_GROUP_ENDPOINT = `${NODE_SERVER}/updateItemGroup`;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ORDERS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export const CREATE_ORDER_ENDPOINT = `${NODE_SERVER}/createOrder`;
// '/updateOrder/${order_id}
export const UPDATE_ORDER_ENDPOINT = `${NODE_SERVER}/updateOrder/`;
export const DELETE_ORDER_ENDPOINT = `${NODE_SERVER}/removeOrder/`;

export const GET_ALL_ORDERS_ENDPOINT = `${NODE_SERVER}/displayOrders`;
export const GET_ORDER_STATUS_ENDPOINT = `${NODE_SERVER}/getOrderStatus`;
export const GET_ORDER_CREATION_DATE_ENDPOINT = `${NODE_SERVER}/getOrderCreationDate`;
export const GET_ORDER_DELIVERY_DATE_ENDPOINT = `${NODE_SERVER}/getOrderDeliveryDate`;

export const UPDATE_ORDER_STATUS_ENDPOINT = `${NODE_SERVER}/updateOrderStatus`;
export const UPDATE_ORDER_DELIVERY_DATE_ENDPOINT = `${NODE_SERVER}/updateOrderDeliveryDate`;

// consider removing outdoor and indoor, add bed (are some of these office depot supplies??)
export const STANDARD_ITEM_GROUPS = [
  "chair",
  "hammer",
  "table",
  "screws",
  "fridge",
  "outdoor",
  "kitchen",
  "indoor",
  "bathroom",
];
