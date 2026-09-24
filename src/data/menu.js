import { PACKAGES, SNACK_ITEMS, SNACK_ALSO } from './constants';

// Menu categories built from the package menus, so the Menu page never drifts from Packages.
const PACKAGE_SECTIONS = [
  { id: "mains",      title: "Main Course",          field: "mains" },
  { id: "starters",   title: "Starters / Reception", field: "starters" },
  { id: "salads",     title: "Salads",               field: "salads" },
  { id: "dessert",    title: "Dessert",              field: "dessert" },
  { id: "drinks",     title: "Drinks",               field: "drinks" },
  { id: "extras",     title: "Bridal Party Extras",  field: "extras" },
  { id: "photoshoot", title: "Photo Shoot (30 Pax)", field: "photoshoot" },
];

export const MENU_SECTIONS = [
  ...PACKAGE_SECTIONS.map(({ id, title, field }) => {
    const dishes = [];
    PACKAGES.forEach((pkg) => {
      (pkg[field] || []).forEach((name) => {
        let dish = dishes.find((d) => d.name === name);
        if (!dish) dishes.push((dish = { name, packages: [] }));
        dish.packages.push(pkg);
      });
    });
    return { id, title, dishes };
  }),
  {
    id: "bistro",
    title: "Snack Bistro",
    bistro: true,
    dishes: [...SNACK_ITEMS, ...SNACK_ALSO].map((name) => ({ name, packages: [] })),
  },
];
