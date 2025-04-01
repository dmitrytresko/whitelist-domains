## Task 1: Implement a UI Component (Whitelisted Domains)

### I ended up going with `Whitelisted Domains` component, implementing the following key parts mentioned below

- Top-level `WhitelistDomains` component, rendered on the home page
- Dedicated `AddDomainDialog` component to allow adding new domains to the allowed list
- Dedicated `RemoveDomainDialog` component to allow removing selected domains from the allowed list
- A few reusable components (e.g. `DomainTag`, `Dialog`, `AllowedDomainList`) to effectively compose the layout

### Notes and trade-offs

I highlighted a few important notes in the comments of related `tsx` files (see `DomainTag.tsx`, `AddDomainDialog.tsx`, `Dialog.tsx`). I also tried splitting features into separate commits to able to better track history of implemented functionality. Nevertheless, but there're still few more trade-fss to mention:

- There could've been a few more reusable components added to be used across the app, like `Button`, `IconButton`, `TextInput`, `Card`, `ConfirmDialog` etc., which I didn't have enough time for.
- Uses Context API, coming from `useDomainContext` hook, to store and manipulate whitelisted domains, allowing global access to them throughout the whole file tree. The domain list gets reset each time after hard refresh or app rebuild, which is not ideal. Can be improved by getting initial context value for domains from localStorage to maintain context between refreshes.
- An additional context could've been created to handle the open/close state of the dialogs, which would help to avoid having `isXOpen` states across the app, relying instead on a handful of callbacks like `renderDialog`, `closeDialog`, coming from that context.
- I'm not using `Selecta` font, which seems to be the primary font for the app in Figma, since it's not available through Google Fonts and I wasn't able to find any free sources to download form to host it locally. Hence default `Arial` font is being used in place of `Selecta` where needed; `Inter` font is utilized as expected though.
- Handles duplicate domain name error when trying to add a domain with an already existing name.

## Task 3: Written Response
