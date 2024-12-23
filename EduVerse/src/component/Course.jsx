import React, { useState } from 'react';
import Header3 from './Header3';
import '../css/Course.css';
import courseService from '../rest/CourseService';
import { useNavigate } from 'react-router-dom';

function Course() {
    const [courseName, setCourseName] = useState('');
    const [courseDescription, setCourseDescription] = useState('');
    const [modules, setModules] = useState([
        { moduleTitle: '', moduleTime: '' }
    ]);

    const navigate = useNavigate();

    const handleAddModule = () => {
        setModules([...modules, { moduleTitle: '', moduleTime: '' }]);
    };

    const handleModuleChange = (index, field, value) => {
        const updatedModules = [...modules];
        updatedModules[index][field] = value;
        setModules(updatedModules);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const courseData = {
            courseName,
            courseDescription,
            dtoModule: modules.map(module => ({
                moduleTitle: module.moduleTitle,
                moduleTime: module.moduleTime
            }))
        };

        try {
            const response = await courseService.createCourse(courseData);
            alert('Kurs başarıyla eklendi!');
            console.log('Yanıt:', response);
            navigate('/home');
        } catch (error) {
            alert('Kurs eklenirken bir hata oluştu.');
        }
    };

    return (
        <div>
            <Header3 />
            <div className="course-container">
                <div className="header-course">
                    <h2>İlgi Çekici Bir Kurs Oluşturun</h2>
                    <p>
                        İster yıllardır, ister ilk defa eğitim veriyor olun, ilgi çekici bir kurs
                        oluşturabilirsiniz. Nereden başlarsanız başlayın, bir üst seviyeye çıkmanıza yardımcı olacak kaynakları ve en iyi
                        uygulamaları sizin için bir araya getirdik.
                    </p>
                </div>
                <form className="course-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="course-name">Ad</label>
                        <input
                            type="text"
                            id="course-name"
                            placeholder="Kurs Adı"
                            value={courseName}
                            onChange={(e) => setCourseName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="course-description">Açıklama</label>
                        <textarea
                            id="course-description"
                            placeholder="Kurs Açıklaması"
                            value={courseDescription}
                            onChange={(e) => setCourseDescription(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <div className="module-group">
                        <div className="module-row">
                            <div className="module-column">
                                <strong>Modül Adı</strong>
                            </div>
                            <div className="module-column">
                                <strong>Modül Süresi</strong>
                            </div>
                        </div>
                        {modules.map((module, index) => (
                            <div key={index} className="module-row">
                                <div className="module-column">
                                    <input
                                        type="text"
                                        placeholder="Modül Adı"
                                        value={module.moduleTitle}
                                        onChange={(e) => handleModuleChange(index, 'moduleTitle', e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="module-column">
                                    <input
                                        type="text"
                                        placeholder="Modül Süresi"
                                        value={module.moduleTime}
                                        onChange={(e) => handleModuleChange(index, 'moduleTime', e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                        ))}
                        <button type="button" className="add-module-btn" onClick={handleAddModule}>
                            Yeni Modül Ekle
                        </button>
                    </div>
                    <button type="submit" className="submit-btn">
                        Kurs Ekle
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Course;
