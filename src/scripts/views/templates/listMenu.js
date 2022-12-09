const listMenu = (menus) => {
  let printMenus = '';

  menus.forEach((menu) => {
    printMenus += `
      <li>${menu.name}</li>
    `;
  });
  return printMenus;
};

export default listMenu;
