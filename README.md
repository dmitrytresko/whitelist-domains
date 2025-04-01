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

Basically, before starting to implement the feature I'd reach out to designer to understand if those misalignments were intended or if they can be ignored. Based on the answer, I'd try to clarify what was the reason behind the one-off misalignment in spacing/font sizes compared to other typical components. If that was an inaccuracy, I would ask the designer to adjust it not only in this specific case, but also to check other occurrences of the same component to avoid the same confusions moving forward.

Besides that, I'd try to double check that with the project manager/business owner to see if this can be expected to happen occasionally. I think it can become quite critical if not handled properly, by causing additional issues with the backlog and potentially creating a "waterfall" of stories to refactor these imperfections across the app. So it's better to try resolving it early on, before diving in to the development.

On top of that, I can think of two ways to about it:

1. Ignore potential misalignments and inaccuracies in the design mock-ups -> proceed with the an already existing commonly uses spacing/fonts.
2. Designer will adjust the mock-ups according to the expectations of business owners, relying on commonly used terms and variables -> once the designs are, we can review them either together (on a call, potentially someone else from the development team, who might also benefit from these changes moving forward) or me individually, to understand if everything it's all clear now, if it looks better, and if's ready to be actually developed.

In case of missing mobile responsiveness, I'd say it depends on the urgency of the feature I'm working on. I'd inform the designer about the lack of mobile mock-ups regardless, and then make an assumption: if that's something critical and urgent, I might come up with my own temporary responsive solution, looking at our core UX principles applied across the app. This could ensure that the application has at least some decent cover in the meantime rather than waiting before the designer creates the mobile version of a certain screen, which can easily take a significant amount of effort. But if the time allows to wait for the structured design solution from a dedicated professional, I could wait until he/she creates one and go from there.
