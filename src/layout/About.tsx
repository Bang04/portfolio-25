import { CareerInfo } from "../components/CareerInfo";
import { CareerProject } from "../components/CareerProject";
export const About = () => {

    return (
        <div className="flex flex-col items-center bg-blue-100 py-16">
            <CareerInfo />
            <CareerProject />
        </div>
    );
};