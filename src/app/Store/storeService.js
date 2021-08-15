const { logger } = require("../../../config/winston");
const { pool } = require("../../../config/database");
const secret_config = require("../../../config/secret");
const storeProvider = require("./storeProvider");
const storeDao = require("./storeDao");
const baseResponse = require("../../../config/baseResponseStatus");
const { response } = require("../../../config/response");
const { errResponse } = require("../../../config/response");

const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { connect } = require("http2");

// Service: Create, Update, Delete 비즈니스 로직 처리

// 유저 회원가입
exports.createUser = async function (
  email,
  hashedPassword,
  salt,
  name,
  phoneNum
) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    await connection.beginTransaction();

    const params = [email, hashedPassword, salt, name, phoneNum];
    const result = await userDao.createUser(connection, params);

    await connection.commit();

    connection.release();
    return result;
  } catch (err) {
    await connection.rollback();
    connection.release();
    logger.error(`User-createUser Service error: ${err.message}`);
    return errResponse(baseResponse.DB_ERROR);
  }
};