import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import { experiences } from '../constants';

const ExperienceCard = ({ experience }) => (
    <VerticalTimelineElement
        contentStyle={{ background: '#1d1836', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid #232631' }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={
            <div className='flex justify-center items-center w-full h-full'>
            </div>
        }
    >
        <div>
            <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
            <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>{experience.company_name}</p>
        </div>

        <ul className='mt-5 list-disc ml-5 space-y-2'>
            {experience.points.map((point, index) => (
                <li key={`experience-point-${index}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>
                    {point}
                </li>
            ))}
        </ul>
    </VerticalTimelineElement>
)

export const Resume = () => {
    return (
        <section className='resume' id='resume'>
            <h1>RESUME</h1>
            <h5 className="title text-center m-heading text-secondary">RESUME</h5>

            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </VerticalTimeline>
            </div>
        </section>
    );
};