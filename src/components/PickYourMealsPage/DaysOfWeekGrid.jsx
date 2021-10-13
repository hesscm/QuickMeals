function DaysOfWeekGrid(props) {
    const handleButtonClick = () => {
        console.log('clicked');
        dispatch({ type: 'GET_API_RECIPES' })
    }

    const handleRemoveButton = (dayOfWeek) => {
        console.log('hello');
        switch (dayOfWeek) {
            case 'Monday':
                props.setMondayMeal({ title: ''})
                break;
            case 'Tuesday':
                props.setTuesdayMeal({ title: '' })
                break;
            case 'Wednesday':
                props.setWednesdayMeal({ title: '' })
                break;
            case 'Thursday':
                props.setThursdayMeal({ title: '' })
                break;
            case 'Friday':
                props.setFridayMeal({ title: '' })
                break;
            case 'Saturday':
                props.setSaturdayMeal({ title: '' })
                break;
            case 'Sunday':
                props.setSundayMeal({ title: '' })
                break;
            default:
                break;
        }
    }
    
    return(
        < div className = "chosenMeals" >
            {/* section 1 */}
                <p>chosenMeals.</p>
                <div className="grid-containerA">
                    <div className="item1">
                        <h1>Monday</h1>
                    {props.mondayMeal.title == '' ?
                            <><br /><br /><p>Click a recipe and choose a day!</p></> :
                            <>
                            <h3>{props.mondayMeal.title}</h3>
                            <img src={props.mondayMeal.image} alt={props.mondayMeal.title}/>
                                <button onClick={() => handleRemoveButton('Monday')}>Remove</button>
                            </>
                        }
                    </div>
                    <div className="item2">
                        <h1>Tuesday</h1>
                    {props.tuesdayMeal.title == '' ?
                            <><br /><br /><p>Click a recipe and choose a day!</p></> :
                            <>
                            <h3>{props.tuesdayMeal.title}</h3>
                            <img src={props.tuesdayMeal.image} alt={props.tuesdayMeal.title} />
                            <button onClick={() => handleRemoveButton('Tuesday')}>Remove</button>
                            </>
                        }
                    </div>
                    <div className="item3">
                        <h1>Wednesday</h1>
                    {props.wednesdayMeal.title == '' ?
                            <><br /><br /><p>Click a recipe and choose a day!</p></> :
                            <>
                            <h3>{props.wednesdayMeal.title}</h3>
                            <img src={props.wednesdayMeal.image} alt={props.wednesdayMeal.title} />
                            <button onClick={() => handleRemoveButton('Wednesday')}>Remove</button>
                            </>
                        }
                    </div>
                    <div className="item4">
                        <h1>Thursday</h1>
                    {props.thursdayMeal.title == '' ?
                            <><br /><br /><p>Click a recipe and choose a day!</p></> :
                            <>
                            <h3>{props.thursdayMeal.title}</h3>
                            <img src={props.thursdayMeal.image} alt={props.thursdayMeal.title} />
                            <button onClick={() => handleRemoveButton('Thursday')}>Remove</button>

                            </>
                        }
                    </div>
                    <div className="item5">
                        <h1>Friday</h1>
                    {props.fridayMeal.title == '' ?
                            <><br /><br /><p>Click a recipe and choose a day!</p></> :
                            <>
                            <h3>{props.fridayMeal.title}</h3>
                            <img src={props.fridayMeal.image} alt={props.fridayMeal.title} />
                            <button onClick={() => handleRemoveButton('Friday')}>Remove</button>

                            </>
                        }
                    </div>
                    <div className="item6">
                        <h1>Saturday</h1>
                    {props.saturdayMeal.title == '' ?
                            <><br /><br /><p>Click a recipe and choose a day!</p></> :
                            <>
                            <h3>{props.saturdayMeal.title}</h3>
                            <img src={props.saturdayMeal.image} alt={props.saturdayMeal.title} />
                            <button onClick={() => handleRemoveButton('Saturday')}>Remove</button>

                            </>
                        }
                    </div>
                    <div className="item7">
                        <h1>Sunday</h1>
                    {props.sundayMeal.title == '' ?
                            <><br /><br /><p>Click a recipe and choose a day!</p></> :
                            <>
                            <h3>{props.sundayMeal.title}</h3>
                            <img src={props.sundayMeal.image} alt={props.sundayMeal.title} />
                            <button onClick={() => handleRemoveButton('Sunday')}>Remove</button>

                            </>
                        }
                    </div>
                </div>
                <br /><br />
                <button onClick={handleButtonClick} className='btn'>Let's Eat!</button>
            </div >
    )
}

export default DaysOfWeekGrid;