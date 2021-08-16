const { logger } = require("../../../config/winston");
const { pool } = require("../../../config/database");
const secret_config = require("../../../config/secret");
const addressProvider = require("./addressProvider");
const addressDao = require("./addressDao");
const baseResponse = require("../../../config/baseResponseStatus");
const { response } = require("../../../config/response");
const { errResponse } = require("../../../config/response");

const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { connect } = require("http2");

// Service: Create, Update, Delete 비즈니스 로직 처리

// 주소 추가
exports.insertAddress = async function (
  userId,
  type,
  nickname,
  buildingName,
  address,
  detailAddress,
  information,
  lat,
  lng
) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    await connection.beginTransaction();

    const params = [
      userId,
      type,
      nickname,
      buildingName,
      address,
      detailAddress,
      information,
      lat,
      lng,
    ];

    const result = await addressDao.insertAddress(connection, params);

    await connection.commit();

    connection.release();
    return result;
  } catch (err) {
    await connection.rollback();
    connection.release();
    logger.error(`Address-insertAddress Service error: ${err.message}`);
    return errResponse(baseResponse.DB_ERROR);
  }
};

// 주소 수정
exports.updateAddress = async function (
  type,
  nickname,
  buildingName,
  address,
  detailAddress,
  information,
  lat,
  lng,
  addressId
) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    await connection.beginTransaction();

    const params = [
      type,
      nickname,
      buildingName,
      address,
      detailAddress,
      information,
      lat,
      lng,
      addressId,
    ];

    const result = await addressDao.updateAddress(connection, params);

    await connection.commit();

    connection.release();
    return result;
  } catch (err) {
    await connection.rollback();
    connection.release();
    logger.error(`Address-insertAddress Service error: ${err.message}`);
    return errResponse(baseResponse.DB_ERROR);
  }
};

// 주소 삭제
exports.deleteAddress = async function (addressId) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    await connection.beginTransaction();

    const result = await addressDao.deleteAddress(connection, addressId);

    await connection.commit();

    connection.release();
    return result;
  } catch (err) {
    await connection.rollback();
    connection.release();
    logger.error(`Address-deleteAddress Service error: ${err.message}`);
    return errResponse(baseResponse.DB_ERROR);
  }
};