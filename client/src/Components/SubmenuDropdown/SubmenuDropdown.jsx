import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { Link } from "react-router-dom";


const SubmenuDropdown = ({allMenus, subMenus}) => {
    

    return (
        <div className='md:hidden'>
        <Accordion>
                    {allMenus.map((menu) => (
                        <AccordionItem key={menu._id}>
                            <AccordionItemHeading>
                                <AccordionItemButton className="text-base, font-semibold pl-3 pb-2">

                                    {menu.menu}
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                {subMenus && subMenus.filter(item => item.menu.toLowerCase() === menu.menu.toLowerCase())
                                    .map(filterItem => <div key={filterItem._id} 
                                        className='border-b-2'                                    

                                    >

                                        <Link to={`/${filterItem.name}`}>
                                            <div className="hover:bg-cyan-400 hover:rounded-lg hover:text-white py-1 pl-4  ">{filterItem.name}</div>

                                        </Link>


                                    </div>)


                                }
                            </AccordionItemPanel>
                        </AccordionItem>
                    ))}
                </Accordion> 
        </div>
    );
};

export default SubmenuDropdown;