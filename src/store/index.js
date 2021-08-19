import { observable } from 'mobx';

export const store = observable({
    boardID: 0,
    setBoardID(boardID) {
        this.boardID = boardID;
    },

    boardName: '전체 게시판',
    setBoardName(boardName) {
        this.boardName = boardName;
    },
});
