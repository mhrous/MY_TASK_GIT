const endPoint = "http://localhost:4000/api";

const headers = {};

const getPartnerAndDriverName = ({ success }) => {
  $.ajax({
    type: "GET",
    url: `${endPoint}/user/name`,
    success,
    headers
  });
};

const getCar = ({ success }) => {
  $.ajax({
    type: "GET",
    url: `${endPoint}/car`,
    success,
    headers
  });
};

const addCar = ({ data, success }) => {
  $.ajax({
    type: "POST",
    url: `${endPoint}/car`,
    success,
    data,
    headers
  });
};

const putCar = ({ id, data, success, error }) => {
  $.ajax({
    type: "PUT",
    url: `${endPoint}/car/${id}`,
    success,
    data,
    error,
    headers
  });
};

const deleteCar = ({ id, success }) => {
  $.ajax({
    type: "DELETE",
    url: `${endPoint}/car/${id}`,
    success,

    headers
  });
};
