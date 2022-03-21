// External types, exported to the public API

export type NoInfer<A extends any> = [A][A extends any ? 0 : never]

export type Interpolation<Props> =
  | string
  | number
  | false
  | ((props: NoInfer<Props>) => Interpolation<Props>)
  | StyledComponentInterpolation
  | Interpolation<Props>[]

export type StyledComponentInterpolation =
  | Pick<StyledComponent<any, any>, keyof StyledComponent<any, any>>
  | Pick<StyledComponent<any>, keyof StyledComponent<any, any>>

export type PropsOf<
  C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = JSX.LibraryManagedAttributes<C, React.ComponentProps<C>>

export interface StyledComponent<ComponentProps extends {}, JSXProps extends {} = {}>
  extends React.FC<ComponentProps & JSXProps> {
  as<Component extends React.ComponentClass<React.ComponentProps<Component>>>(
    component: Component,
  ): StyledComponent<PropsOf<Component>, {ref?: React.Ref<InstanceType<Component>>}>

  as<Component extends React.ComponentType<React.ComponentProps<Component>>>(
    component: Component,
  ): StyledComponent<PropsOf<Component>>

  as<Tag extends keyof JSX.IntrinsicElements>(tag: Tag): StyledComponent<JSX.IntrinsicElements[Tag]>
}

export interface BaseCreateStyled {
  <Component extends React.ComponentClass<React.ComponentProps<Component>>>(
    component: Component,
  ): CreateStyledComponent<PropsOf<Component>, {ref?: React.Ref<InstanceType<Component>>}>

  <Component extends React.ComponentType<React.ComponentProps<Component>>>(component: Component): CreateStyledComponent<
    PropsOf<Component>
  >

  <Tag extends keyof JSX.IntrinsicElements>(tag: Tag): CreateStyledComponent<{}, JSX.IntrinsicElements[Tag]>
}

export interface CreateStyledComponent<ComponentProps extends {}, JSXProps extends {} = {}> {
  <AdditionalProps extends {}>(
    template: TemplateStringsArray,
    ...styles: Interpolation<ComponentProps & AdditionalProps>[]
  ): StyledComponent<ComponentProps & AdditionalProps, JSXProps>

  (template: TemplateStringsArray, ...styles: Interpolation<ComponentProps>[]): StyledComponent<
    ComponentProps,
    JSXProps
  >
}

export type StyledTags = {
  [Tag in keyof JSX.IntrinsicElements]: CreateStyledComponent<{}, JSX.IntrinsicElements[Tag]>
}

export interface Styled extends BaseCreateStyled, StyledTags {}
