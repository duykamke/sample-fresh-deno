import { PropsWithChildren } from "@elysiajs/html";

export default (p: PropsWithChildren<{
    items: Array<{
        name: string;
        link: string;
    }>
}>) => {
    return (
        <span
            class={
                `inline-flex
                divide-x-2
                divide-yellow-300
                absolute
                -left-1
                z-50
                transform-gpu
                rotate-90
                origin-bottom-left
                overflow-x-hidden
                whitespace-nowrap
                transition-width
                ease-linear
                duration-300
                w-0
                group-hover:w-[15ch]`}
        >
            {p.items.map(({ name, link }, itemIndex) => (
                itemIndex < 1 ?
                    (<a class="px-1 hover:text-yellow-300" href={link}>
                        {name.substring(1)}
                    </a>) :
                    (<a class="px-1 hover:text-yellow-300" style={"view-transition-name: box"} href={link}>
                        {name}
                    </a>)
            ))}
        </span>
    )
}