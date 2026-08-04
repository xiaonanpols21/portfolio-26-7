import Card from "@/components/card";

export default function Home() {
    return (
        <div className="wrapper">
            <section className="hero">
                <h1>Front-end / Design</h1>
                <p>Een creatieve front-end developer met oog voor design waarbij toegankelijkheid belangrijk is voor iedereen!</p>
            </section>
            <main className="main">
                <div className="divider"></div>
                <ul className="card-list">
                    <li>
                        <Card/>
                    </li>
                    <li>
                        <Card/>
                    </li>
                    <li>
                        <Card/>
                    </li>
                </ul>
            </main>
        </div>
    );
}
