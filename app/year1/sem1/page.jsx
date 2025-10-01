// app/year1/sem1/page.jsx
import ModuleList from '@components/navigation/ModuleList.jsx';
import { fetchMethod } from '@utils/fetchMethod.js';

export default async function Year1Sem1Page() {
    let modules = [];

    try {
        const res = await fetchMethod('/api/modules?year_sem=year1_sem1');
        if (res.status >= 200 && res.status < 300) {
            modules = res.data;
        } else {
            console.error('Failed to fetch modules:', res);
        }
    } catch (err) {
        console.error('Error fetching modules:', err);
    }

    return (
        <div className="container-lg mt-5 mb-3">
            <div className="row">
                {modules.length > 0 ? (
                    <ModuleList modules={modules} />
                ) : (
                    // Server-side skeleton/fallback
                    Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card skeleton-card">
                                <div className="card-body">
                                    <div className="bg-secondary rounded mb-2" style={{ height: '20px', width: '60%' }} />
                                    <div className="bg-secondary rounded" style={{ height: '100px', width: '100%' }} />
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
