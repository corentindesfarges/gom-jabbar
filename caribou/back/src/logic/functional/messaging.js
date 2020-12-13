module.exports = class MessagingLogic {
  constructor(MongoProvider) {
    this.mongoProvider = MongoProvider;
  }

  joinRoom(accessProfile, room, socket, cb) {socket.join(room);
    socket.broadcast.to(room).emit('message', {user: 'admin', text: `${accessProfile.username} has joined!`});
    cb();
  }

  sendMessage(accessProfile, content, room, io, cb) {
    return this.mongoProvider((AccessProfile, Message) => {
      const translatedMessage = content
        .replace(/[bcdfghjklmnpqrstvwxz]/g, "grm")
        .replace(/[aeiouy]/g, "muu");
      io.to(room).emit('message', {user: accessProfile.username, text: translatedMessage});
      const message = new Message({content: translatedMessage, room, accessProfile});
      return message.save()
        .then(cb);
    });
  }
};
