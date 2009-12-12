Sort.date.formats[0] = {
	re : /(\d{2,4})-(\d{1,2})-(\d{1,2})\D*((\d\d):(\d\d))?/,
	f  : function( x ) {
		var d = new Date( Sort.date.fixYear( x[1] ), +x[2], +x[3] );
		if ( x[5] > 0 ) d.setHours( x[5] );
		if ( x[6] > 0 ) d.setMinutes( x[6] );
		return d.getTime();
	}
}