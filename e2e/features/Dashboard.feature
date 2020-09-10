Feature: Dashboard Screen
	@Dashboard
	Scenario: Dashboard Screen High level Validation
		Given I press the Dashboard tab
		Then The Dashboard tab should load and Dashboard screenshot is taken

	@Dashboard
	Scenario: Dashboard Screen Deep Validation
		Given I press the Dashboard tab of the App
		Then The Dashboard tab should load with all coins data
