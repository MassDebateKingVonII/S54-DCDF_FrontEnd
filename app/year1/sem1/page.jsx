'use client';

import { Suspense } from 'react';
import ModuleList from '@components/navigation/ModuleList.jsx';
import { fetchMethod } from '@utils/fetchMethod.js';

// Wrap your fetch in a resource for Suspense
function createModuleResource() {
    let status = 'pending';
    let result;
    const promise = fetchMethod('/api/modules?year_sem=year1_sem1')
        .then(res => {
            if (res.status >= 200 && res.status < 300) {
                status = 'success';
                result = res.data;
            } else {
                status = 'error';
                result = new Error('❌ Failed to load modules');
            }
        })
        .catch(err => {
            status = 'error';
            result = new Error('❌ Failed to load modules');
        });

    return {
        read() {
            if (status === 'pending') throw promise;
            if (status === 'error') throw result;
            if (status === 'success') return result;
        }
    };
}

const modulesResource = createModuleResource();

function ModulesListWrapper() {
    const modules = modulesResource.read();
    return <ModuleList modules={modules} />;
}

function ModulesSkeleton({ count = 5 }) {
    return (
        <div className="row g-3">
            {Array.from({ length: count }).map((_, i) => (
                <div key={i} className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card skeleton-card">
                        <div className="card-body">
                            <div className="bg-secondary rounded mb-2" style={{ height: '20px', width: '60%' }} />
                            <div className="bg-secondary rounded" style={{ height: '100px', width: '100%' }} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}


export default function Year1Sem1Page() {
    return (
        <div className="container-lg mt-5 mb-3">
            <Suspense fallback={<ModulesSkeleton />}>
                <ModulesListWrapper />
            </Suspense>
        </div>
    );
}
