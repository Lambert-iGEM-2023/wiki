import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import clsx from "clsx";

export interface NavItemGroup {
  title: string;
  items: NavItemSolo[];
}
function isNavItemGroup(object: any): object is NavItemGroup {
  return "items" in object;
}
export interface NavItemSolo {
  title: string;
  href: string;
}
export default function Nav() {
  const schema: (NavItemGroup | NavItemSolo)[] = [
    {
      title: "Team",
      items: [
        { title: "Team", href: "/lambert-ga/team" },
        { title: "Attributions", href: "/lambert-ga/attributions" },
      ],
    },
    {
      title: "Project",
      items: [
        //description, contribution, engineering success, proof of concept
        { title: "Description", href: "/lambert-ga/description" },
        { title: "Contribution", href: "/lambert-ga/contribution" },
        {
          title: "Engineering Success",
          href: "/lambert-ga/engineering-success",
        },
        { title: "Proof of Concept", href: "/lambert-ga/proof-of-concept" },
      ],
    },
    {
      title: "Wetlab",
      items: [
        //parts library, parts collection, eRCA, protein purification, experiments, notebook, results
        { title: "Parts Library", href: "/lambert-ga/parts-library" },
        { title: "Parts Collection", href: "/lambert-ga/parts-collection" },
        { title: "eRCA", href: "/lambert-ga/erca" },
        {
          title: "Protein Purification",
          href: "/lambert-ga/protein-purification",
        },
        { title: "Experiments", href: "/lambert-ga/experiments" },
        { title: "Notebook", href: "/lambert-ga/notebook" },
        { title: "Results", href: "/lambert-ga/results" },
      ],
    },
    {
      title: "Drylab",
      items: [
        //measurement, hardware, software, model
        { title: "Measurement", href: "/lambert-ga/measurement" },
        { title: "Hardware", href: "/lambert-ga/hardware" },
        { title: "Software", href: "/lambert-ga/software" },
        { title: "Model", href: "/lambert-ga/model" },
      ],
    },
    {
      title: "Human Practices",
      items: [
        //human practices, inclusivity, saftey
        { title: "Human Practices", href: "/lambert-ga/human-practices" },
        { title: "Inclusivity", href: "/lambert-ga/inclusivity" },
        { title: "Safety", href: "/lambert-ga/safety" },
      ],
    },

    {
      title: "Judging Form",
      href: "/lambert-ga/404",
    },
  ];
  return (
    <div className="flex justify-end">
      <NavigationMenuPrimitive.Root className="relative ">
        <NavigationMenuPrimitive.List className="flex  flex-row rounded-lg bg-white dark:bg-gray-800 p-2 space-x-2">
          {schema.map((item) => (
            <>
              {isNavItemGroup(item) ? (
                <NavigationMenuPrimitive.Item>
                  <NavigationMenuPrimitive.Trigger
                    className={clsx(
                      "px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900",
                      "font-medium",
                      "text-gray-700 dark:text-gray-100",
                      "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                    )}
                  >
                    {item.title}
                  </NavigationMenuPrimitive.Trigger>

                  <NavigationMenuPrimitive.Content
                    className={clsx(
                      "absolute w-auto top-0 left-0 rounded-xl bg-gray-1",
                      "radix-motion-from-start:animate-enter-from-left",
                      "radix-motion-from-end:animate-enter-from-right",
                      "radix-motion-to-start:animate-exit-to-left",
                      "radix-motion-to-end:animate-exit-to-right"
                    )}
                  >
                    <div className="min-w-32 p-2 flex flex-col">
                      {item.items.map((link, index) => (
                        <NavigationMenuPrimitive.Link
                          href={link.href}
                          className={`py-2 px-2 border-b ${
                            index != item.items.length &&
                            "border-gray-6 text-gray-11"
                          }`}
                        >
                          {link.title}
                        </NavigationMenuPrimitive.Link>
                      ))}
                    </div>
                  </NavigationMenuPrimitive.Content>
                </NavigationMenuPrimitive.Item>
              ) : (
                <NavigationMenuPrimitive.Item asChild>
                  <NavigationMenuPrimitive.Link
                    href={item.href}
                    className={clsx(
                      "px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900",
                      "font-regular text-gray-11 dark:text-gray-100"
                    )}
                  >
                    {item.title}
                  </NavigationMenuPrimitive.Link>
                </NavigationMenuPrimitive.Item>
              )}
            </>
          ))}

          <NavigationMenuPrimitive.Indicator
            className={clsx(
              "z-10 relative",
              //   "top-[100%] flex items-end justify-center h-2 overflow-hidden",
              "radix-state-visible:animate-fade-in",
              "radix-state-hidden:animate-fade-out",
              "transition-[width_transform] duration-[250ms] ease-[ease]"
            )}
          >
            <div className="top-1 relative shadow bg-gray-1 dark:bg-gray-800 w-2 h-2 rotate-45 left-1/2" />
            <NavigationMenuPrimitive.Viewport
              className={clsx(
                "relative shadow-lg rounded-md bg-white dark:bg-gray-800 overflow-hidden",
                "w-radix-navigation-menu-viewport",
                "h-radix-navigation-menu-viewport",
                "radix-state-open:animate-scale-in-content",
                "radix-state-closed:animate-scale-out-content",
                "origin-[top_center] transition-[width_height] duration-300 ease-[ease]"
              )}
            />
          </NavigationMenuPrimitive.Indicator>
        </NavigationMenuPrimitive.List>

        <div
          className={clsx(
            "absolute flex justify-center"
            // "w-[140%] left-[-20%] top-[100%]"
          )}
          style={
            {
              // perspective: "2000px",
            }
          }
        ></div>
      </NavigationMenuPrimitive.Root>
    </div>
  );
}
