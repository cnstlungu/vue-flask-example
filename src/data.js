var siteName = 'Vue Example Business'

var servicesList = [{
  title: 'Service 1',
  description: `This service is quite important to our customers because.`,
  expanded: false
},
{
  title: 'Service 2',
  description: `This service is also quite popular with out customers.`,
  expanded: false
}

]

var contactData = [

  {name: 'phone', nameEn: 'Phone', value: '0123456789', url: 'phone:0123456789'},
  {name: 'hours', nameEn: 'Working ours', value: 'Mon-Fri 08:00-19:00', url: 'phone:0123456789'},
  {name: 'address', nameEn: 'Address', value: '3 Atlantic Rift Drive, Atlantic Ocean ', url: 'https://goo.gl/maps/6Z1xE96VeHufL66dA'},
  {name: 'email', nameEn: 'E-mail', value: 'example@example.com', url: 'mailto:example@example.com'}

]

var welcome = 'Welcome to ' + siteName + '!'
var slogan = 'Best quality items for lowest prices.'
var prices = [
  { item: 'Item 1', price: 'EUR 100' },
  { item: 'Item 2', price: 'EUR 50' },
  { item: 'Item 3', price: 'EUR 125' },
  { item: 'Premium Item', price: 'EUR 400' }
]

var pricesDescription = `You should really keep in mind the following about our prices: A,B,C. `

var aboutdescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`

var privacyDescription = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

var homeDescription = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`

var data = {
  servicesList: servicesList,
  contactData: contactData,
  siteName: siteName,
  welcome: welcome,
  slogan: slogan,
  prices: prices,
  pricesDescription: pricesDescription,
  aboutdescription: aboutdescription,
  privacyDescription: privacyDescription,
  homeDescription: homeDescription
}

export default data
