/* eslint-disable no-console */
// "prettier": "yarn prettier --write src/**/*.{js,jsx}",
const EVENT = 'event';
const E_UPDATE_INFO = 'client_info';
const MSG = 'message';

export default class GoChat {
  constructor() {
    this.socket = null;
    this.username = '';
    this.userid = '';
    console.log('zo oz');
  }

  setInfo(socket, username, userid, usertype) {
    this.socket = socket;
    this.username = username;
    this.userid = userid;
    this.usertype = usertype;
  }

  sendInfo() {
    if (this.socket) {
      this.sendPkg({
        type: EVENT,
        name: E_UPDATE_INFO,
        content: this.username,
        sender_type: this.usertype,
        sender_id: this.userid,
      });
    }
  }

  start() {
    this.socket = new WebSocket(`ws://${document.location.host}/ws`);
    this.socket.onopen = evt => {
      this.onOpen(evt);
    };
    this.socket.onerror = evt => {
      this.onError(evt);
    };
    this.socket.onclose = evt => {
      this.onClose(evt);
    };
    this.socket.onmessage = evt => {
      this.onMessage(evt.data);
    };
  }

  sendPkg(pkg) {
    this.socket.send(JSON.stringify(pkg));
  }

  sendMsg(toType, toId, content) {
    if (this.socket) {
      this.sendPkg({
        type: MSG,

        sender_type: this.usertype,
        sender_id: this.userid,
        name: this.username,

        content,

        receiver_type: toType,
        receiver_id: toId,
      });
    }
  }

  sendEvent(name) {
    if (this.socket) {
      this.sendPkg({
        type: EVENT,
        name,

        sender_type: this.usertype,
        sender_id: this.userid,
        content: this.username,

        receiver_id: '',
        receiver_type: '',
      });
    }
  }

  /* eslint-disable class-methods-use-this */
  onOpen(evt) {
    console.log('evt', evt);
  }

  onClose(evt) {
    console.log('evt', evt);
  }

  onMessage(pkg) {
    console.log('pkg', pkg);
  }

  onError(evt) {
    console.log('evt', evt);
  }
}
