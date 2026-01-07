import { CareerInfo } from "../ui/CareerInfo";
import { CareerProject } from "../ui/CareerProject";
export const About = () => {

    return (
        <div className="flex flex-col items-center bg-blue-100 py-16">
            <CareerInfo />
            <CareerProject />
        </div>
    );
};