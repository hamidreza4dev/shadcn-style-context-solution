import { createContext, useContext } from "react";
import { type VariantProps } from "tailwind-variants";

type Recipe = {
  (props?: Record<string, unknown>): VariantProps<any>;
  defaultVariants: Record<string, unknown>;
  variantKeys: string[];
};

export type Slots<R extends Recipe> = keyof ReturnType<R>;

export type StyleContextProps<Component extends (...args: any) => any> = {
  styleContext: VariantProps<Component>;
};

export const createStyleContext = <R extends Recipe>(variant: R) => {
  const StyleContext = createContext<VariantProps<R> | null>(null);

  function withProvider<Props extends object>(
    Component: React.ComponentType<
      Props & VariantProps<R> & StyleContextProps<R>
    >,
  ) {
    const WithProvider = (props: Props & VariantProps<R>) => {
      const value = variant.variantKeys.reduce(
        (acc, key) => {
          acc[key] = props[key];
          return acc;
        },
        {} as Record<string, unknown>,
      ) as VariantProps<R>;

      return (
        <StyleContext.Provider value={value}>
          <Component {...props} styleContext={value} />
        </StyleContext.Provider>
      );
    };

    WithProvider.displayName = Component.displayName || Component.name;
    return WithProvider;
  }

  function withContext<Props extends object>(
    Component: React.ComponentType<Props & StyleContextProps<R>>,
  ) {
    const WithContext = (props: Props) => {
      const context = useContext(StyleContext);
      if (!context) {
        throw new Error("Component must be used within an style context");
      }
      return <Component {...props} styleContext={context} />;
    };

    WithContext.displayName = Component.displayName || Component.name;
    return WithContext;
  }

  return {
    withProvider,
    withContext,
  };
};
