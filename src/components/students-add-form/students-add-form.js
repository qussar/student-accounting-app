import './students-add-form.css';

const StudentsAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Добавьте нового студента</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Как его зовут?" />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Стипендия в $?" />

                <button type="submit"
                    className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    )
}

export default StudentsAddForm;