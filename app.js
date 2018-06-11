
// BUDGET CONTROLLER
var budgetController = (function() {
	// Some code
})();


//UI CONTROLLER
var UIcontroller = (function() {
	
	var DOMStrings = {
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value',
		inputBtn: '.add__btn'
	}
	
	return {
		getInput: function() {
			return {
				type: document.querySelector(DOMStrings.inputType).value, // Will be either inc or exp
				description: document.querySelector(DOMStrings.inputDescription).value,
				value: document.querySelector(DOMStrings.inputValue).value			
			};				 
		},
		
		getDOMStrings: function() {
			return DOMStrings;
		}
	};	
})();

//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
	
	var setUPEventListeners = function() {
		var DOM = UICtrl.getDOMStrings();
		
		document.querySelector(DOM.inputBtn).addEventListener('click', function() {
			ctrlAddItem();		
		});

		document.addEventListener('keypress', function(event) {
			if (event.keyCode === 13 || event.which === 13) {
			ctrlAddItem();			
			}	
		});
	}
	
	var ctrlAddItem = function() {
		
		// 1. Ger the field input data
		var input = UICtrl.getInput();
		
		// 2. Add the item to the budget controller
		
		// 3. Add the item to the UI
		
		// 4. Calculate the budgetController
		
		// 5. Display the budget in the UI	
	};
	
	return {
		init: function() {
			console.log('Aplication starts');
			setUPEventListeners();
		}	
	}

})(budgetController,UIcontroller);

controller.init();