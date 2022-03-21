import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

const favoritePage = require("../cucumberpages/FavoritePage")
const cityPage = require("../cucumberpages/CityPage")
const loginPage = require("../cucumberpages/LoginPage")
const homePage = require("../cucumberpages/HomePage")
const restaurantListPage = require("../cucumberpages/RestaurantListPage")
const restaurantPage = require("../cucumberpages/RestaurantPage")


Given('User opens the city page', () => {
    cityPage.openCityPage()
});

And('User choose city {string}', (city) => {
    cityPage.chooseCity()
});

And('Dont show pop-ups with cookies', () => {
    cityPage.addBrowserCookie()
});

When('User logins from home page', () => {
    loginPage.successLogin()
});

When('User add restaurant to the favorites', () => {
    homePage.selectRegionByValue('Şişli (Esentepe Mah.)')
    homePage.clickRestaurantButton()
    restaurantListPage.selectRandomRestaurant()
    restaurantPage.addFavoriteSelectedRestaurant()
});

And('User navigate to favorite page from homepage', () => {
    homePage.openUserDetailContainer()
    homePage.clickMyFavorite()
});

Then('User validates restaurant added to the favorites', () => {
    favoritePage.checkFavoriteRestaurantInList()
});
 