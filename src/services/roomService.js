const Room = require('../models/roomModel');

exports.getAllRooms = async () => {
  return await Room.findAll({
    where: { deleted: false }
  });
};

exports.createRoom = async (roomData) => {
  return await Room.create(roomData);
};

exports.updateRoom = async (id, roomData) => {
  const room = await Room.findByPk(id);
  if (!room || room.deleted) throw new Error('Room not found');
  return await room.update(roomData);
};

exports.deleteRoom = async (id) => {
  const room = await Room.findByPk(id);
  if (!room || room.deleted) throw new Error('Room not found');
  return await room.update({ deleted: true });
};