export default function Subheading(props: {name: string}) {
    return (
        <a href={`#${props.name}`}>
            <div id={props.name}>
                <p className={"text-4xl font-semibold"}>{props.name}</p>
            </div>
        </a>
    );
}