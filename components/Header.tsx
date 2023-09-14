export default () => {
    return (
        <header
            class="font-mono w-full inline-flex justify-between items-center py-4 px-8 bg-gradient-to-r from-yellow-500 via-alice-300 to-blue-100 text-eerie-500 animate-gradient-x">
            <div class="group">
                <h2>
                    <span class="relative">
                        <span class="inline-flex overflow-x-hidden animate-type-text"> Zuiverse! </span>
                        <span
                            class="w-1 absolute -bottom-0 left-0 -top-1 inline-block bg-eerie-100 animate-type"
                        />
                    </span>
                </h2>
            </div>
            <h5 class="inline-flex justify-between items-center gap-2">
                built with
                <a class="underline" href="https://bun.sh" target="_blank">Bun</a>
                and
                <a class="underline" href="https://htmx.org" target="_blank">HTMX</a>
            </h5>
        </header>
    );
};