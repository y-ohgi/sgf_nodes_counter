// stage.js

module.exports = {
	stage: [],
	size: 19,

	/**
	 * 初期処理
	 *
	 * 碁盤の作成を行う
	 * @param {number} size 碁盤の大きさ
	 */
	init: function(size){
		this.size = size;
		for(var i=0;i<this.size;i++){
			this.stage[i] = [];
			for(var j=0;j<this.size;j++){
				this.stage[i][j] = 0;
			}
		}
	},

	/**
	 * 受け取った値の座標にインクリメントする
	 *
	 * @param {array} a [[x, y],...]の形式になっている2次元配列
	 */
	inc: function(a){
		for(var i=0;i<a.length;i++){
			if(a[i][0] < 0 || a[i][1] < 0)continue;
			if(a[i][0] >= this.size || a[i][1] >= this.size)continue;
			
			this.stage[a[i][0]][a[i][1]]++;
		}
	},

	/**
	 * 現在の碁盤を返す
	 *
	 * @return {array} 碁盤
	 */
	get: function(){
		return this.stage;
	}

};
