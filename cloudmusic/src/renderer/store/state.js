const state = {
    userInfo:{
        userName:'',
        nickName:'',
        password:'',
        avatarUrl:'',
        collectSongList:[],
        collectSong:[]
    },
    songs:{
        singer: {},
        playing: false,
        fullScreen: false,
        playList: [],
        sequenceList: [],
        playHistoryList: [],
        mode: 'sequence',
        currentIndex: -1,
        audio:{}
    }
}
export default state