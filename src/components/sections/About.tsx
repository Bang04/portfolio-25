import { CareerInfo } from "../ui/CareerInfo";
import { CareerProject } from "../ui/CareerProject";
export const About = () => {

    return (
        <div className="flex flex-col items-center py-16">
            <CareerInfo />
            <CareerProject />
        </div>
    );
};