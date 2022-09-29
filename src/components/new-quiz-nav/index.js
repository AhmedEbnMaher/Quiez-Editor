// @flow 
import React from 'react';
import {  NavItem, NavLink } from "reactstrap";
import classnames from 'classnames';
const QuizNav= ({toggleTabProgress,activeTabProgress}) => {
    return (
        <div>
              <ul className="twitter-bs-wizard-nav nav-justified nav nav-pills">
                                            <NavItem>
                                                                    <NavLink className={classnames({ active: activeTabProgress === 1 })}  >
                            
                                                                       <span className='tab-view'> Quiz Details</span>
                                                                    </NavLink>
                                                                </NavItem>
                                                                <NavItem>
                                                                    <NavLink className={classnames({ active: activeTabProgress === 2 })}  >
                                                                      
                                                                       <span className='tab-view'> Question One</span>
                                                                    </NavLink>
                                                                </NavItem>
                                                                <NavItem>
                                                                    <NavLink className={classnames({ active: activeTabProgress === 3 })}  >
                                                                   <span className='tab-view'> Question Two</span>
                                                                    </NavLink>
                                                                </NavItem>
                                                                <NavItem>
                                                                    <NavLink className={classnames({ active: activeTabProgress === 4 })}  >
                                                                    <span className='tab-view'>Question Three</span>
                                                                    </NavLink>
                                                                </NavItem>
                                                                <NavItem>
                                                                    <NavLink className={classnames({ active: activeTabProgress === 5 })}  >
                                                                      <span className='tab-view'> Question Four</span>
                                                                    </NavLink>
                                                                </NavItem>
                                                                <NavItem>
                                                                    <NavLink className={classnames({ active: activeTabProgress === 6 })} >
                                                                    <span className='tab-view'>Question Five</span>
                                                                    </NavLink>
                                                                </NavItem>
                                                                <NavItem>
                                                                    <NavLink className={classnames({ active: activeTabProgress === 7 })}>
                                                                   
                                                                    <span className='tab-view'>Confirm Detail</span>
                                                                    </NavLink>
                                                                </NavItem>
                                            </ul>
        </div>
    );
};
export default QuizNav