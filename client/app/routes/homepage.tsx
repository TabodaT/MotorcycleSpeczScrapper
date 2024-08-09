import Button from "~/components/Button"
import { CtaTypes } from "~/enums/CtaTypes"
import Link from "~/components/Link"

export default function Homepage(){
    return (
        <div>
            <div className="flex justify-center items-center">
                <h1> Welcome to Moto</h1>
            </div>
            <div className="flex items-center justify-around">
                <div className="flex flex-col ">
                    <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="model">Choose a model</label>
                    <select className="border-solid border-2 border-black rounded text-center" name="model" id="model">
                        <option value="bmw">Bmw</option>
                        <option value="honda">Honda</option>
                        <option value="suzuki">Suzuki</option>
                    </select>
                </div>

                <div className="flex flex-col ">
                    <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="engine">Choose an engine</label>
                    <select className="border-solid border-2 border-black rounded text-center" name="engine" id="engine">
                        <option value="1.4">1.4</option>
                        <option value="1.5">1.5</option>
                        <option value="2.0">2.0</option>
                    </select>
                </div>

                <div className="flex flex-col ">
                    <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="color">Choose a color</label>
                    <select className="border-solid border-2 border-black rounded text-center" name="color" id="color">
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="pink">Pink</option>
                    </select>
                </div>
            </div>
            <div className="flex justify-center items-center flex-col">
                <input className= "border-solid border-2 border-black rounded text-center" placeholder="Search moto" type="search" id="seach" name="q" />
            </div>
            <div className="flex justify-center items-center">
                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search</button>  */}
                <Button text="Search" type={CtaTypes.PRIMARY} isSubmit={true} />
                <Button text="Subscribe" type={CtaTypes.SECONDARY} />
                <Button text="Disable" type={CtaTypes.DISABLED} />
            </div>

            <div className="flex justify-center items-center">
                <Link
                    text="Learn more about our models"
                    title="Learn more about Moto models"
                    link="https://www.moto.com/models"
                    isNewTab={true}
                />
            </div>
        </div>
    )
        
    
}