"use client"
import React, { use, useState } from 'react'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {ChevronRight, Loader, Send} from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnimatedGradientText } from '@/components/ui/animated-gradient-text';
import { suggestions } from '@/data/constant';
import { useUser, useClerk} from '@clerk/nextjs';
import { randomUUID } from 'crypto';
import axios from 'axios';


function Hero() {

	const [userInput, setUserInput] = useState<string>();
	const [device, setDevice] = useState<string>('website');
	const {user} = useUser();
	const { openSignIn } = useClerk();
	const [loading, setLoading] = useState(false);

	const onCreateProject = async() => {
		if (!user){
			openSignIn();
			return;
		}
		// Create new project
		if (!user){
			return;
		}
		setLoading(true);
		const projectId = crypto.randomUUID();
		const result = await axios.post('/api/project', {
			userInput: userInput,
			device: device,
			projectId: projectId
		})
		console.log(result.data)
		setLoading(false)
	}

  return (
	//Main Div
    <div className='relative z-20 p-10 md:px-24 lg:px-48 xl:px-60 mt-10'>
		{/* Animated Magic Text */}
		<div className='flex items-center justify-center w-full mb-5'>
			<div className="group relative max-w-sm mx-auto flex items-center justify-center rounded-full px-2 py-2 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">		
				<span
					className={cn(
					"animate-gradient absolute inset-0 block h-full w-full rounded-[inherit] bg-linear-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-size-[300%_100%] p-px"
					)}
					style={{
					WebkitMask:
						"linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
					WebkitMaskComposite: "destination-out",
					mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
					maskComposite: "subtract",
					WebkitClipPath: "padding-box",
					}}
				/>
				🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
				<AnimatedGradientText className="text-sm font-medium">
					Introducing UIStudio
				</AnimatedGradientText>
				<ChevronRight className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
			</div>
		</div>

	 {/* TITLE AND SUBTITLE */}
      <h2 className='text-5xl text-center font-bold'> Design High Quality <span className='text-primary'>Websites and Mobile Apps</span> UI/UX </h2>
      <p className='text-center mt-3 '>Imagine your idea and turn into reality with UIStudio AI Powered Application ✨</p>
		{/* INPUT BOX  */}
        <div className="flex mt-5 w-full gap-6 items-center justify-center">
			<InputGroup className='max-w-3xl border border-primary bg-primary/10 rounded-2xl z-10 overflow-visible'>
				<InputGroupTextarea
				data-slot="input-group-control"
				className="flex field-sizing-content md:min-h-50 min-h-30 w-full resize-none rounded-2xl bg-transparent px-3 py-2.5 text-base transition-[color,box-shadow] outline-none md:text-sm"
				placeholder="Enter your prompt for the UI Design..."
				value={userInput}
				onChange={(e)=>setUserInput(e.target?.value)}
				/>
				<InputGroupAddon align="block-end">
				{/* Select Box */}
				<Select 
					defaultValue='website' 
					onValueChange={(value) => setDevice(value)}>
					<SelectTrigger
					  className="w-30 bg-primary/10 border border-primary/40 text-primary rounded-lg shadow-sm hover:border-primary focus:ring-2 focus:ring-primary/30">
						<SelectValue placeholder="Type" />
					</SelectTrigger>
					<SelectContent
					>
						<SelectItem value="mobile">Mobile</SelectItem>
						<SelectItem value="website">Website</SelectItem>
					</SelectContent>
				</Select>
				<InputGroupButton 
					className="ml-auto" 
					disabled = {loading}
					size="sm" 
					variant="default"
					onClick={()=>onCreateProject()}
				>   

					{ loading? <Loader className='animate-spin'/>:<Send/> }

				</InputGroupButton>
				</InputGroupAddon>
			</InputGroup>
        </div>

		{/* Suggestions  */}
		<div className='flex gap-4 mt-5 items-center justify-center cursor-pointer'>
			{suggestions.map((suggestion, index) => (
				<div 
					key={index}
					className='p-4 border-2 rounded-2xl flex-col items-center justify-center border-primary/20 bg-primary/10 z-10'
					onClick={()=>setUserInput(suggestion?.description)}
				>
					<h2 className='text-center'>{suggestion?.icon}</h2>
					<h2 className='text-center text-sm'>{suggestion?.name}</h2>
					
				</div>
			))}
		</div>
    </div>
  )
}

export default Hero
