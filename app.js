(function(){
	var app=angular.module('store',[]);
	app.controller('StoreController',function(){
		this.products = gems                                                                                 ;
	});
	var gems=[
	{
		name:'saphire',
		price:5,
		description:'very shiny and attractive',
		canPurchase:true,
		soldOut:true,
		images:[
		{
			full:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Geschliffener_blauer_Saphir.jpg/170px-Geschliffener_blauer_Saphir.jpg',
		}	
		]
	},
	{
		name:'ruby',
		price:12.15,
		description:'very costly and attractive',
		canPurchase:true,
		soldOut:false,
		images:[
		{
			full:'http://ruby.org.in/wp-content/uploads/natural-ruby-stone.jpg'
		}
		]
	},
	]
})();
(function(){
	app.controller('PanelController',function(){
	this.tab=1;
	this.selectTab=function(setTab){
		this.tab=setTab;
	};
	this.isSelected=function(checkTab){
		return this.tab=checkTab;
	};
	})
})();