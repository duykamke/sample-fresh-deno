import NavDropdown from "./NavDropdown";

export default () => {
  const alphabeticalSections = {
    A: [
      {
        name: 'about me',
        link: '/about'
      },
    ],
    B: [
      {
        name: 'bout me',
        link: '/about'
      },
    ],
    C: [],
    D: [],
    E: [],
    F: [],
    G: [],
    H: [],
    I: [],
    J: [],
    K: [],
    L: [],
    M: [],
    N: [],
    O: [],
    P: [],
    Q: [],
    R: [],
    S: [],
    T: [],
    U: [],
    V: [],
    W: [],
    X: [],
    Y: [],
    Z: []
  };

  return (
    <ul class="w-full inline-flex justify-between">
      {Object.entries(alphabeticalSections).map(([character, items]) => (
        <li class="flex p-2 group">
          <h4 class="relative">
            <span class="cursor-pointer">{character}</span>
            <NavDropdown items={items} />
          </h4>
        </li>
      ))}
    </ul>
  );
};