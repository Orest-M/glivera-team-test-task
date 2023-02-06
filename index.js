// const customersList = document.querySelector('.js-customers-info');

// const customers = [
//   {
//     name: 'Jane Cooper',
//     company: 'Microsoft',
//     phone: '(225) 555-0118',
//     email: 'jane@microsoft.com',
//     country: 'United States',
//     status: 'Active',
//   },
//   {
//     name: 'Floyd Miles',
//     company: 'Yahoo',
//     phone: '(205) 555-0100',
//     email: 'floyd@yahoo.com',
//     country: 'Kiribati',
//     status: 'Inactive',
//   },
//   {
//     name: 'Ronald Richards',
//     company: 'Adobe',
//     phone: '(302) 555-0107',
//     email: 'ronald@adobe.com',
//     country: 'Israel',
//     status: 'Inactive',
//   },
//   {
//     name: 'Marvin McKinney',
//     company: 'Tesla',
//     phone: '(252) 555-0126',
//     email: 'marvin@tesla.com',
//     country: 'Iran',
//     status: 'Active',
//   },
//   {
//     name: 'Jerome Bell',
//     company: 'Google',
//     phone: '(629) 555-0129',
//     email: 'jerome@google.com',
//     country: 'Réunion',
//     status: 'Active',
//   },
//   {
//     name: 'Kathryn Murphy',
//     company: 'Microsoft',
//     phone: '(406) 555-0120',
//     email: 'kathryn@microsoft.com',
//     country: 'Curaçao',
//     status: 'Active',
//   },
//   {
//     name: 'Jacob Jones',
//     company: 'Yahoo',
//     phone: '(208) 555-0112',
//     email: 'jacob@yahoo.com',
//     country: 'Brazil',
//     status: 'Active',
//   },
//   {
//     name: 'Kristin Watson',
//     company: 'Facebook',
//     phone: '(704) 555-0127',
//     email: 'kristin@facebook.com',
//     country: 'Åland Islands',
//     status: 'Inactive',
//   },
// ];

// const customersMarkup = customers
//   .map(
//     ({ name, company, phone, email, country, status }) =>
//       `<li class="main__customers-info-item">
//       <ul class="main__customers-info-values list">
//         <li class="main__customers-info-values-item">
//           <p class="main__customers-info-name">${name}</p>
//         </li>
//         <li class="main__customers-info-values-item">
//           <p class="main__customers-info-company">${company}</p>
//         </li>
//         <li class="main__customers-info-values-item">
//           <p class="main__customers-info-phone">${phone}</p>
//         </li>
//         <li class="main__customers-info-values-item">
//           <p class="main__customers-info-email">${email}</p>
//         </li>
//         <li class="main__customers-info-values-item">
//           <p class="main__customers-info-country">${country}</p>
//         </li>
//       </ul>
//       <p class="main__customers-info-status_${status.toLowerCase()}">${status}</p>
//   </li>`
//   )
//   .join('');

// customersList.insertAdjacentHTML('afterbegin', customersMarkup);
