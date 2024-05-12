import { useTodos } from '../TodosContext';
import './Filter.scss';

function Filter() {
    const store = useTodos()
    return (
        <>
            <div className="filters">
                <div>
                    <p>Filter by state</p>
                    <div className="badges">
                        <div className={`badge ${store.filterBy === "To-Do" ? "selected" : ''}`}
                            onClick={() => {
                                store.setFilterBY("To-Do")
                            }}

                        >
                            To-Do
                        </div>
                        <div className={`badge ${store.filterBy === "Done" ? "selected" : ''}`}
                            onClick={() => store.setFilterBY("Done")}
                        >
                            Done
                        </div>
                        <span className="clear" onClick={() => store.setFilterBY("")}>
                            x clear
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Filter