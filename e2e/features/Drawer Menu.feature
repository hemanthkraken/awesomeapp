Feature: Drawer Menu
	@Drawer
	Scenario: Left Drawer Menu Validation
		Given I swipe from left edge of the screen
		Then The Menu Drawer is opened
