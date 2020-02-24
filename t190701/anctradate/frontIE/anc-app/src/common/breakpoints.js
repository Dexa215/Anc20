{
    // Breakpoints
    xs: boolean
    sm: boolean
    md: boolean
    lg: boolean
    xl: boolean

    // Conditionals
    xsOnly: boolean
    smOnly: boolean
    smAndDown: boolean
    smAndUp: boolean
    mdOnly: boolean
    mdAndDown: boolean
    mdAndUp: boolean
    lgOnly: boolean
    lgAndDown: boolean
    lgAndUp: boolean
    xlOnly: boolean

    // Current breakpoint name (e.g. 'md')
    name: string

    // Dimensions
    height: number
    width: number

    // Thresholds
    // Configurable through options
    {
        xs: number
        sm: number
        md: number
        lg: number
    }

    // Scrollbar
    scrollBarWidth: number
}