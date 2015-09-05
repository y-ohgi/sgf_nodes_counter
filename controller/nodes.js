// nodes.js

module.exports = {
	// 使用する値
	elem: ['AB', 'AW'],

	/**
	 * 使用する要素を抜き出す
	 *
	 * @param {object} o パースされたsgfデータ
	 * @return {object}
	 */
	select: function(o){
		var selected = [];

		for(var key in o){
			if(this.elem.indexOf(key) >= 0){

				for(var i=0;i<o[key].length;i++){
					if(o[key][i].indexOf(":") >= 0){
						var sec = o[key][i].split(":");
						var left = [this.alfToNum(sec[0][0]), this.alfToNum(sec[0][1])];
						var right = [this.alfToNum(sec[1][0]), this.alfToNum(sec[1][1])];
						
						for(var j=left[0];j<=right[0];j++){
							for(var l=left[1];l<=right[1];l++){
								selected.push([j, l]);
							}
						}
					}else{
						selected.push([ this.alfToNum(o[key][i][0]), this.alfToNum(o[key][i][1]) ]);

					}
				}
			}
		}
		
		return selected;
	},

	/**
	 * 英字を数値に変換
	 *
	 * @param {string} s 変換する必要のある1文字
	 * @return {number} 変換した数値
	 */
	alfToNum: function(s){
		var alf = "abcdefghijklmnopqrstuvwxyz";
		return alf.indexOf(s);
	}

};
