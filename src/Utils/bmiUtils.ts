export const calculateBMI = (height: number, weight: number, unit: string): number | null => {
    let heightInMeters = height;
   
    if (unit === 'cm') {
      heightInMeters = height / 100;
    } else if (unit === 'ft.') {
      heightInMeters = height * 0.3048;
    } else if (unit === 'in.') {
      heightInMeters = height * 0.0254;
    }
  
    if (heightInMeters > 0) {
      return weight / (heightInMeters * heightInMeters);
    }
    return null;
  };