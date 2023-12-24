import { data } from './assets'

const App = () => {
    return (
        <main className="md:flex md:h-screen md:flex-col md:items-center md:justify-center">
            <div className="mb-5 md:flex md:w-[720px] md:rounded-[2rem] md:shadow-[25px_40px_30px_-20px_rgba(0,0,0,0.3)] md:shadow-lightLavender/35">
                <section className="flex flex-col items-center justify-center rounded-b-[2rem] bg-gradient-to-b from-lightSlateBlueBg to-lightRoyalBlueBg px-12 text-whiteCustom md:w-1/2 md:rounded-[2rem]">
                    <h2 className="my-5 text-xl font-semibold text-lightLavender">
                        Your Result
                    </h2>
                    <div className="rounded-[100%] bg-gradient-to-b from-violetBlueCr to-persianBlueCr px-12 pb-6 pt-9">
                        <span className="text-6xl font-bold">76</span>
                        <p className="mt-2 text-center text-base font-semibold text-lightLavender">
                            of 100
                        </p>
                    </div>
                    <h1 className="mb-3 mt-10 text-3xl font-semibold">Great</h1>
                    <p className="mb-10 text-center text-lightLavender">
                        You scored higher than 65% of the people who have taken
                        these tests.
                    </p>
                </section>
                <section className="px-9 py-7 md:w-1/2">
                    <h2 className="mb-5 text-xl font-bold text-darkGrayBlue">
                        Summary
                    </h2>
                    <ul>
                        {data.map((item, i) => (
                            <li key={i}>
                                <div
                                    className={`flex justify-between ${item.background} mb-5 rounded-lg px-5 py-3`}
                                >
                                    <div className={`flex gap-2 ${item.color}`}>
                                        <img
                                            src={item.logo}
                                            alt={`logo ${item.type}`}
                                        />
                                        <p>{item.label}</p>
                                    </div>
                                    <p>
                                        <span className="font-extrabold text-darkGrayBlue">
                                            {item.score}
                                        </span>{' '}
                                        <span className="font-semibold text-gray-400">
                                            / 100
                                        </span>
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <button className="my-5 w-full rounded-full bg-darkGrayBlue py-3 text-whiteCustom hover:bg-gradient-to-b hover:from-lightSlateBlueBg hover:to-lightRoyalBlueBg">
                        Continue
                    </button>
                </section>
            </div>
            <div className="attribution">
                Challenge by{' '}
                <a
                    href="https://www.frontendmentor.io?ref=challenge"
                    target="_blank"
                >
                    Frontend Mentor
                </a>
                . Coded by <a href="https://github.com/LOT-1024/res_summary_comp_fm" target='_blank'>LOT-1024</a>.
            </div>
        </main>
    )
}

export default App
